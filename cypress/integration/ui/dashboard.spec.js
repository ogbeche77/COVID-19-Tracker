import {
  cyInfectedDashBoard,
  cyRecoveredDashBoard,
  cyDeathDashBoard,
} from "../../../src/handles/index";

describe("End ChatPlugin Conversation", () => {
  it("Confirm that total number of COVID infection, Recovery & Death are present", () => {
    cy.visit("http://localhost:3000/COVID-19-Tracker");

    cy.get(`[data-cy=${cyInfectedDashBoard}]`)
      .children()
      .should("have.length", 1);
    cy.get(`[data-cy=${cyRecoveredDashBoard}]`)
      .children()
      .should("have.length", 1);
    cy.get(`[data-cy=${cyDeathDashBoard}]`).children().should("have.length", 1);
  });
});
