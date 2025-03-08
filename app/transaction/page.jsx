'use client'
import { Navbar } from "@/components/navbar";
import { Button } from "@heroui/button";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/table";
import style from "@/styles/"

const rows = [
  {
    key: 1,
    transaction_id: "TXN100001",
    date: "2025-03-01",
    time: "14:23:45",
    amount: 258,
    currency: "USD",
    status: "Completed",
    sender: "John Doe",
    receiver: "Alice Smith",
    payment_method: "Credit Card",
    category: "Shopping",
  },
  {
    key: 2,
    transaction_id: "TXN100002",
    date: "2025-03-02",
    time: "10:05:32",
    amount: 75,
    currency: "USD",
    status: "Pending",
    sender: "Emily Davis",
    receiver: "David Johnson",
    payment_method: "PayPal",
    category: "Food & Dining",
  },
  {
    key: 3,
    transaction_id: "TXN100003",
    date: "2025-03-03",
    time: "18:45:12",
    amount: 503,
    currency: "USD",
    status: "Failed",
    sender: "Michael Brown",
    receiver: "Sarah Wilson",
    payment_method: "Bank Transfer",
    category: "Electronics",
  },
  {
    key: 4,
    transaction_id: "TXN100004",
    date: "2025-03-04",
    time: "09:12:22",
    amount: 29,
    currency: "USD",
    status: "Completed",
    sender: "Chris Martin",
    receiver: "Emma Thompson",
    payment_method: "Debit Card",
    category: "Transportation",
  },
  {
    key: 5,
    transaction_id: "TXN100005",
    date: "2025-03-05",
    time: "22:30:15",
    amount: 150,
    currency: "USD",
    status: "Completed",
    sender: "Sophia Roberts",
    receiver: "Olivia White",
    payment_method: "Crypto",
    category: "Entertainment",
  },
  {
    key: 6,
    transaction_id: "TXN100006",
    date: "2025-03-06",
    time: "08:55:50",
    amount: 321,
    currency: "USD",
    status: "Pending",
    sender: "Liam Scott",
    receiver: "William Hall",
    payment_method: "Wire Transfer",
    category: "Travel",
  },
  {
    key: 7,
    transaction_id: "TXN100007",
    date: "2025-03-07",
    time: "16:42:38",
    amount: 96.8,
    currency: "USD",
    status: "Completed",
    sender: "Isabella Wright",
    receiver: "Benjamin Harris",
    payment_method: "Google Pay",
    category: "Groceries",
  },
  {
    key: 8,
    transaction_id: "TXN100008",
    date: "2025-03-08",
    time: "11:18:29",
    amount: 401,
    currency: "USD",
    status: "Failed",
    sender: "James Lewis",
    receiver: "Charlotte King",
    payment_method: "Venmo",
    category: "Bills & Utilities",
  },
  {
    key: 9,
    transaction_id: "TXN100009",
    date: "2025-03-09",
    time: "20:05:14",
    amount: 273,
    currency: "USD",
    status: "Completed",
    sender: "Ethan Walker",
    receiver: "Mia Allen",
    payment_method: "Apple Pay",
    category: "Health & Wellness",
  },
  {
    key: 10,
    transaction_id: "TXN100010",
    date: "2025-03-10",
    time: "13:30:10",
    amount: 186,
    currency: "USD",
    status: "Completed",
    sender: "Ava Martinez",
    receiver: "Noah Clark",
    payment_method: "CashApp",
    category: "Education",
  },
];


const columns = [
  {
    key: "transaction_id",
    label: "Transaction_id",
  },
  {
    key: "payment_method",
    label: "Payment_method",
  },
  {
    key: "amount",
    label: "Amount",
  },
];
function Transaction() {
  return (
    <>
      <Navbar />
      <div>
        <Table aria-label="Example table with dynamic content">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <center className={style.init}>
        <Button>Initalize</Button>
      </center>
    </>
  );
}
export default Transaction;
