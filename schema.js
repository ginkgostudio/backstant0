const { gql, makeExecutableSchema } = require('apollo-server-express');
const Expense = require("./models/expense").Expenses;
const Cashin = require("./models/cashin").Cashins;

const typeDefs = gql`
    type Expense {
		id: ID!
		amount: String!
		description: String!
		currency: String!
		paymentMethod: String!
		date: String!
   }
   type Cashin {
	   id: ID!
	   invoiceNumber: String!
	   description: String!
	   amount: String!
	   currency: String!
	   bankAccount: String!
	   date: String!
   }
   type Query {
		getExpenses: [Expense]
		getExpense(id: ID!): Expense
		getCashins: [Cashin]
		getCashin(id: ID!): Cashin
   }
   type Mutation {
		addExpense(amount: String!, description: String!, paymentMethod: String!, currency: String!,date:String!): Expense
		updateExpense(id:ID!, amount: String!, description: String!, paymentMethod: String!, currency: String!, date:String!): Expense
		deleteExpense(id: ID!): Expense
		addCashin(invoiceNumber: String!, description: String!, amount: String!, currency: String!, bankAccount: String!, date: String!): Cashin
		updateCashin(id:ID!, invoiceNumber: String!, description: String!, amount: String!, currency: String!, bankAccount: String!, date: String!): Cashin
		deleteCashin(id: ID!): Cashin
   }
`;

const resolvers = {
	Query: {
		getExpenses: (parent, args) => {
			console.log(Expense);
			return Expense.find({});
		},
		getExpense: (parent, args) => {
			return Expense.findById(args.id);
		},
		getCashins: (parent, args) => {
			console.log(Cashin);
			return Cashin.find({});
		},
		getCashin: (parent, args) => {
			return Cashin.findById(args.id);
		}
	},
	Mutation: {
		addExpense: (parent, args) => {
			let newExpense = new Expense({
				amount: args.amount,
				description: args.description,
				currency: args.currency,
				paymentMethod: args.paymentMethod,
				date: args.date
			});
			return newExpense.save();
		},
		updateExpense: (parent, args) => {
			if (!args.id) return;
			return Expense.findOneAndUpdate(
				{
					_id: args.id
				},
				{
					$set: {
						amount: args.amount,
						description: args.description,
						currency: args.currency,
						paymentMethod: args.paymentMethod,
						date: args.date
					}
				}, { new: true }, (err, Expense) => {
					if (err) {
						console.log('Something went wrong when updating the expense');
					} else {
					}
				}
			);
		},
		addCashin: (parent, args) => {
			let newCashin = new Cashin({
				invoiceNumber: args.invoiceNumber,
				description: args.description,
				amount: args.amount,
				currency: args.currency,
				bankAccount: args.bankAccount,
				date: args.date
			});
			return newCashin.save();
		},
		updateCashin: (parent, args) => {
			if (!args.id) return;
			return Cashin.findOneAndUpdate(
				{
					_id: args.id
				},
				{
					$set: {
						invoiceNumber: args.invoiceNumber,
						description: args.description,
						amount: args.amount,
						currency: args.currency,
						bankAccount: args.bankAccount,
						date: args.date
					}
				}, { new: true }, (err, Cashin) => {
					if (err) {
						console.log('Something went wrong when updating the cashin');
					} else {
					}
				}
			);
		}
	}
}

module.exports = makeExecutableSchema({
	typeDefs: [typeDefs],
	resolvers: resolvers
  });