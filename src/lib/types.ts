export type Contact = {
  id: string;
  name: string;
  email: string;
};

export type Group = {
  id: string;
  name: string;
  memberIds: string[];
  balance?: string;
  memberBalances?: Record<string, number>;
};

// type Group = {
//   id: string;
//   name: string;
//   balance: string;
//   memberIds: string[];
//   memberBalances: Record<string, number>;
// };

export type SummaryItem = {
  label: string;
  amount: number;
  meta?: string;
};

export type Expense = {
  id: string;
  name: string;
  amount: number;
  category: string;
  groupId: string;
  personId: string;
  date: string;
};

export type SummaryCard = {
  id: string;
  title: string;
  value: string;
  subtitle: string;
  description: string;
  details: SummaryItem[];
};
