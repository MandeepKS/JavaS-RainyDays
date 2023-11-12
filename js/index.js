import { jacketscollectionHomePage } from "./home.js";
import { jacketPage } from "./postjacket.js";
import { jacketscollectionPage } from "./postjackets.js";

if(location.pathname === " ")
{
  jacketscollectionHomePage();
}
if(location.pathname === "/index")
{
  jacketscollectionHomePage();
}

if(location.pathname === "/collection")
{
  jacketscollectionPage();

}


if(location.pathname === "/productdetail/")
{

  jacketPage();
}