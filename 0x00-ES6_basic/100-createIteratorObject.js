function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: [...employees],
  };
}

function createReportObject(employeesList) {
  return {
    allEmployees: { employeesList },
  };
}

function createIteratorObject(report) {
  let myArrray = [];
  
}

const employees = {
  ...createEmployeesObject('engineering', ['Bob', 'Jane']),
  ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);

for (const item of reportWithIterator) {
  console.log(item);
}
