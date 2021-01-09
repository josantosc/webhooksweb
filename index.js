const express = require("express");
const {functionAdc, functionSub} = require('./src/operation')
const app = express();

express.json();
app.post("/", express.json(), (request, response) => {
  const parameters = request.body.queryResult.outputContexts[0].parameters;
  const operation = parameters.operacao;
  const number1 = parameters.primeironumero;
  const number2 = parameters.segundonumero;

  if (operation == 1) {
    const resultOperation = functionAdc(number1, number2);
    resposta = {
      fulfillmentText: resultOperation,
    };
    return response.json(resposta);
  }

  if (operation == 2) {
    const resultOperation = functionSub(number1, number2);
    resposta = {
      fulfillmentText: resultOperation,
    };
    return response.json(resposta);
  }
});
const port = 8080;
app.listen(port);
