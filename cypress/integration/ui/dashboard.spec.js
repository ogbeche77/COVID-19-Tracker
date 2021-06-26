import {
  cyInfectedDashBoard,
  cyRecoveredDashBoard,
  cyDeathDashBoard,
} from "../../../src/handles/index";

describe("Confirm that total number of COVID infection", () => {
  it("Confirm that total number of COVID infection, Recovery & Death are present", () => {
    cy.visit("http://localhost:3000/COVID-19-Tracker");

    cy.get(`[data-cy=${cyInfectedDashBoard}]`).should("have.length", 1);
    cy.get(`[data-cy=${cyRecoveredDashBoard}]`).should("have.length", 1);
    cy.get(`[data-cy=${cyDeathDashBoard}]`).should("have.length", 1);
  });
});
