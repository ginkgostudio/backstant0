const { gql, makeExecutableSchema } = require('apollo-server-express');
const Expense = require("./models/expense").Expenses;

const typeDefs = gql`
    type Expense {
		id: ID!
		amount: String!
		description: String!
		currency: String!
		paymentMethod: String!
		date: String!
   }
   type Query {
		getExpenses: [Expense]
		getExpense(id: ID!): Expense
   }
   type Mutation {
		addExpense(amount: String!, description: String!, paymentMethod: String!, currency: String!,date:String!): Expense
		updateExpense(id:ID!, amount: String!, description: String!, paymentMethod: String!, currency: String!, date:String!): Expense
		deleteExpense(id: ID!): Expense
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
		}
	}
}

module.exports = makeExecutableSchema({
	typeDefs: [typeDefs],
	resolvers: resolvers
  });