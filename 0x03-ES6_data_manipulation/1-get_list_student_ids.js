export default function getListStudentIds(arg) {
  if (arg instanceof Array) {
    return arg.map((student) => student.id);
  }
  return [];
}
