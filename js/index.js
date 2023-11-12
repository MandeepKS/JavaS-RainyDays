import { jacketscollectionHomePage } from "./home.js";
import { jacketPage } from "./postjacket.js";
import { jacketscollectionPage } from "./postjackets.js";


if(location.pathname === "/index.html")
{
  jacketscollectionHomePage();
}

if(location.pathname === "/collection.html")
{
  jacketscollectionPage();

}


if(location.pathname === "/productdetail.html")
{

  jacketPage();
}