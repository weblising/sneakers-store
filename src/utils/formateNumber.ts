export default function formateNumber(
  number: number,
  sign: string = " "
): string {
  const subTitleArr: string[] = number.toString().split(".");
  const subTitleIntArr: string[] = subTitleArr[0].split("").reverse();

  const subTitleArrFormated: string[] = [];

  for (let i = 0; i < subTitleIntArr.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      subTitleArrFormated.push(sign);
    }
    subTitleArrFormated.push(subTitleIntArr[i]);
  }

  return subTitleArr[1]
    ? [subTitleArrFormated.reverse().join(""), subTitleArr[1]].join(".")
    : subTitleArrFormated.reverse().join("");
}
