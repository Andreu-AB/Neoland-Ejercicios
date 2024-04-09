import { getUser } from "../global/state/globalState";
import {
  Login,
  PrintPokemonPage,
  PrintTicTacToePage,
  printTemplateDashboard,
} from "../pages";

export const initControler = (pagesRender) => {
  switch (pagesRender) {
    case undefined:
      localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login();
      break;
    case "Pokemon":
      PrintPokemonPage();
      break;
    case "Dashboard":
      printTemplateDashboard();
      break;
    case "TicTacToe":
      PrintTicTacToePage();
      break;
    case "Login":
      Login();
      break;
    case "Memory":
      "PrintMemoryPage() ------> en caso de que lo haya";
      break;
  }
};
