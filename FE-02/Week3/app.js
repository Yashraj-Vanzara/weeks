const fs = require("fs");

const data = fs.readFileSync("./fe02_bank.csv", "utf-8");
const line = data.split("\n");

const headers = line[0].trim().split(",");
console.log(headers);

const transactions = [];

for (let index = 1; index < line.length; index++) {
  const obj = {};

  const data = line[index].split(",");
  headers.forEach((value, index) => {
    obj[value] = data[index];
  });

  obj.Amount = Number(obj.Amount);

  transactions.push(obj);
}

//! sort by date

transactions.sort((a, b) => new Date(a.Date) - new Date(b.Date));

const summary = {};

for (const txs of transactions) {
  const name = txs.AccountHolder;

  if (!summary[name]) {
    summary[name] = {
      AccountHolder: name,
      TotalCredit: 0,
      TotalDebit: 0,
      LargestTransaction: 0,
      SalaryTransactions: [],
    };
  }

  if (txs.Type === "Credit") {
    summary[name].TotalCredit += txs.Amount;
  } else {
    summary[name].TotalDebit += txs.Amount;
  }

  if (Math.abs(txs.Amount) > summary[name].LargestTransaction) {
    summary[name].LargestTransaction = Math.abs(txs.Amount);
  }

  if (txs.Remarks.toLowerCase().includes("salary")) {
    summary[name].SalaryTransactions.push(txs.TransactionID);
  }
}

const summaryArray = Object.values(summary);
const headerss = [
  "AccountHolder",
  "TotalCredit",
  "TotalDebit",
  "LargestTransaction",
  "SalaryTransactions",
];

let csv = headerss.join(",") + "\n";


summaryArray.forEach((user) => {
  const row = [
    user.AccountHolder,
    user.TotalCredit,
    user.TotalDebit,
    user.LargestTransaction,
    `"${user.SalaryTransactions.join(";")}"`,
  ];
  csv += row.join(",") + "\n";
});

fs.writeFileSync("bank_summary.csv", csv, "utf-8");
