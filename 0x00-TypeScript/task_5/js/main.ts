interface MajorCredits {
  credit: number;
  _brand: 'Major';
}

interface MinorCredits {
  credit: number;
  _brand: 'Minor';
}

const sumMajorCredits = (
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits => {
  const sum = subject1.credit + subject2.credit;
  const obj: MajorCredits = {
    credit: sum,
    _brand: 'Major',
  };

  return obj;
}

const sumMinorCredits = (
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits => {
  const sum = subject1.credit + subject2.credit;
  const obj: MinorCredits = {
    credit: sum,
    _brand: 'Minor',
  };

  return obj;
}

// const credict1: MajorCredits = {
//   credit: 1554354,
//   _brand: 'Major',
// };

// const credict2: MajorCredits = {
//   credit: 557487,
//   _brand: 'Major',
// };

// console.log(sumMajorCredits(credict1, credict2));