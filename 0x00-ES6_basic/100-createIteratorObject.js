export default function createIteratorObject(report) {
  const keys = Object.keys(report.allEmployees);
  const result = [];
  keys.forEach((element) => {
    result.push(...report.allEmployees[element]);
  });
  return result;
}
