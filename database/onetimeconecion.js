// declare module globalThis {
//   let postgresSqlClient: ReturnType<typeof postgres> | undefined;
// }

// //one time connection to database so it does not render every time the browser loads
// function connectOneTimeToDataBase() {
//   if (!globalThis.postgresSqlClient) {
//     globalThis.postgresSqlClient = postgres({ transform: { undefined: null } });
//   }
//   const sql = globalThis.postgresSqlClient;
//   return sql;
// }
// const sql = connectOneTimeToDataBase;
