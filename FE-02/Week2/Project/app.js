const { exec } = require("child_process");
const fs = require("fs");

function genrateAnalysisFromEmployes() {

  const Employes = fs.readFileSync("./employes.json", "utf-8");
  const data = JSON.parse(Employes);
  const result = data.sort((a, b) => b.salary - a.salary);


  const expemployee = data.filter((x) => x.experience >= 3);


  const summarylist = [];
  expemployee.forEach((element) => {
    const anualbonus = element.salary * 0.1 * element.experience;
    summarylist.push({
      name: element.name,
      department: element.department,
      anualbonus,
    });
  });

  const totalSalryExpenditure = expemployee.reduce((acc, curr) => {
    acc += curr.salary;
    return acc;
  }, 0);



  console.log(" Step-1 The list of sorted Employess\n", result);
  console.log(
    "---------------------------------------------------------------------------------------"
  );
  console.log("\nStep-2 The Summary List\n", summarylist);
  console.log(
    "---------------------------------------------------------------------------------------"
  );

    console.log("\nStep-3 The Total Salary Expenditure\n",totalSalryExpenditure);
}

genrateAnalysisFromEmployes();
