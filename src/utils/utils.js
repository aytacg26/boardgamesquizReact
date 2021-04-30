import {
  FaExclamationCircle,
  FaUserAlt,
  FaUserEdit,
  FaUserFriends,
  FaUserMinus,
  FaUserPlus,
} from 'react-icons/fa';
import { MdDone, MdDoneAll } from 'react-icons/md';
import { ImCross, ImUserMinus, ImUserPlus } from 'react-icons/im';
import { RiCloseCircleLine } from 'react-icons/ri';

export const checkSpecialCharacters = (value) => {
  const specialChars = /[!@#$%^&*()/+=~€£;_,.?":{}|<>]/g;
  let hasSpecialChars = true;

  if (typeof value === 'string') {
    //can be string or number or true/false
    hasSpecialChars = specialChars.test(value);

    return { hasSpecialChars };
  } else if (typeof value === 'object' && Array.isArray(value)) {
    //can be an string array or number array or boolean array,
    //in any case typeof each item from input will be string
    value.forEach((item) => {
      if (specialChars.test(item)) {
        return { hasSpecialChars: true };
      } else {
        //each item won't pass the test of specialChars, which means they do not have any special char, otherwise
        //loop will stop in if block
        hasSpecialChars = false;
      }
    });

    //This will always return false, we cannot apply this return process in loop
    return { hasSpecialChars };
  } else if (typeof value === 'object') {
    //we may have an object which is not an array, we need to check each value of object key {key:value}
    //From input element, this will come as string and will not pass the test in first if statement and will
    //never reach this point. This part created for other possible use cases.
    const keys = Object.keys();

    //instead of if(keys), I corrected it to length, because function is also an object and Object.keys(fn) gives empty array
    //empty array is truthy in JS and hence it will return hasSpecialChars false. We do not want something like that
    //Bug correction - instead of keys, check keys.length
    if (keys?.length > 0) {
      keys.forEach((key) => {
        if (specialChars.test(value[key])) {
          return { hasSpecialChars: true };
        } else {
          //each item won't pass the test of specialChars, which means they do not have any special char, otherwise
          //loop will stop in if block
          hasSpecialChars = false;
        }
      });

      //This will always return false, we cannot apply this return process in loop
      return { hasSpecialChars };
    } else {
      return { hasSpecialChars };
    }
  } else {
    return { hasSpecialChars };
  }
};

export const isValidName = (name, validLength = 20) => {
  const { hasSpecialChars } = checkSpecialCharacters(name);
  const hasValidLength = name.length <= validLength;

  return { hasSpecialChars, hasValidLength };
};

export const getClassByType = (classes, type = '') => {
  switch (type?.toLowerCase()) {
    case 'success':
      return ` ${classes.Success}`;

    case 'danger':
      return ` ${classes.Danger}`;

    case 'warning':
      return ` ${classes.Warning}`;

    default:
      return ` ${classes.Primary}`;
  }
};

export const icons = Object.freeze({
  success: 'success',
  correct: 'correct',
  error: 'error',
  successOne: 'success-one',
  correctOne: 'correct-one',
  wrong: 'wrong',
  user: 'user',
  editUser: 'user-edit',
  friends: 'friends',
  deleteUser: 'delete-user',
  deleteUserV2: 'delete-user-v2',
  addUser: 'add-user',
  addUserV2: 'add-user-v2',
  close: 'close',
});

export const Icon = ({ name, style }) => {
  switch (name) {
    case icons.success:
    case icons.correct:
      return <MdDoneAll style={style} />;
    case icons.error:
      return <FaExclamationCircle style={style} />;
    case icons.successOne:
    case icons.correctOne:
      return <MdDone style={style} />;
    case icons.wrong:
      return <ImCross style={style} />;
    case icons.user:
      return <FaUserAlt style={style} />;
    case icons.editUser:
      return <FaUserEdit style={style} />;
    case icons.friends:
      return <FaUserFriends style={style} />;
    case icons.addUser:
      return <FaUserPlus style={style} />;
    case icons.addUserV2:
      return <ImUserPlus style={style} />;
    case icons.deleteUser:
      return <FaUserMinus style={style} />;
    case icons.deleteUserV2:
      return <ImUserMinus style={style} />;
    case icons.close:
      return <RiCloseCircleLine style={style} />;

    default:
      return null;
  }
};

export const validateAnswer = (playerAnswer, correct_answer) => {
  const correct = correct_answer;

  const isArray = Array.isArray(correct);

  if (isArray) {
    const isEqualLength = playerAnswer.length === correct.length;

    if (isEqualLength) {
      for (let i = 0; i < playerAnswer.length; i++) {
        if (!correct.includes(parseInt(playerAnswer[i]))) {
          return false;
        }
      }

      return true;
    }

    return false;
  } else {
    const playerAnswerVal = playerAnswer[0];

    if (playerAnswerVal === correct.toString()) {
      return true;
    }

    return false;
  }
};

export const highLight = (correctAnswer, highLightClass) => {
  correctAnswer.forEach((ans) => {
    if (typeof ans === 'number') {
      document
        .getElementById(`${ans}`)
        .parentElement.classList.add(highLightClass);
    } else {
      const options = document.querySelectorAll("input[type='radio']");
      for (let i = 0; i < options.length; i++) {
        if (options[i].value.toString() === ans.toString()) {
          options[i].parentElement.classList.add(highLightClass);
        }
      }
    }
  });
};

export const generateMessage = (name, isForCorrect = true) => {
  const nameToUse = name ? name : 'Player';

  const correctMessages = [
    'Good Job!',
    'Excellent!',
    'Nice Work!',
    'Fantastic!',
    'Well Done!',
    'Congrats!',
    'Great Job!',
    'Perfect!',
    'Keep up the good work!',
    "That's great!",
    'Perfect!',
    'Wonderful!',
    'Super!',
    'Nothing can stop you now!',
    'Exactly Right!',
  ];

  const wrongMessages = [
    'How did you arrive at your answer?',
    "You're on the right track, but not there yet.",
    "Interesting... it's not exactly what I was looking for",
    "Sorry, that's not correct",
  ];

  //length is used to get correct range for random values. Ex: for wrong messages it range must be 0 - 3
  const length = isForCorrect ? correctMessages.length : wrongMessages.length;
  const randomNum = Math.floor(Math.random() * length);

  return isForCorrect
    ? `${correctMessages[randomNum]} ${nameToUse} you got the right answer`
    : `${wrongMessages[randomNum]}`;
};
