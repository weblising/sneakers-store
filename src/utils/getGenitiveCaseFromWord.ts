type depNumberType = number;
type wordInNominative = string;
type declination = "first" | "second" | "third";
type ExecuteFunction = (arg1: depNumberType, arg2: wordInNominative) => string;
type MainFunction = (
  arg1: depNumberType,
  arg2: wordInNominative,
  arg3: declination
) => string;

const getGenitiveCaseFromFirstDeclinationWord: ExecuteFunction = (
  depNumber,
  wordInNominative
) => {
  const numStringify: string = depNumber.toString();
  const wordRoot: string = wordInNominative.slice(
    0,
    wordInNominative.length - 1
  );

  if (numStringify.length >= 2) {
    const tensPart = numStringify.slice(-2);

    if (tensPart[0] === "1") {
      return wordRoot;
    }
  }

  const lastLetterInNum: string = numStringify.slice(-1);

  if (["2", "3", "4"].includes(lastLetterInNum)) {
    return `${wordRoot}и`;
  } else if (lastLetterInNum === "1") {
    return `${wordRoot}a`;
  }
  return wordRoot;
};

const getGenitiveCaseFromWord: MainFunction = (
  depNumber,
  wordInNominative,
  declination
) => {
  let resString: string = "";

  switch (declination) {
    case "first":
      resString = getGenitiveCaseFromFirstDeclinationWord(
        depNumber,
        wordInNominative
      );
      break;
    default:
      break;
  }

  return resString;
};

export default getGenitiveCaseFromWord;
