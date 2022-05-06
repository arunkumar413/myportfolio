import react, { useState, useEffect } from "react";
import { ReactComponent as NodejsIcon } from "./icons/nodejs.svg";
import { ReactComponent as HtmlIcon } from "./icons/html.svg";
import { ReactComponent as JsIcon } from "./icons/javascript.svg";
import { ReactComponent as CssIcon } from "./icons/css.svg";
import { ReactComponent as Neo4jIcon } from "./icons/neo4j.svg";
import { ReactComponent as DBIcon } from "./icons/database.svg";
import { ReactComponent as MongoIcon } from "./icons/MongoDB.svg";
import { ReactComponent as ReactIcon } from "./icons/react.svg";
import { ReactComponent as RustIcon } from "./icons/rust.svg";
import { ReactComponent as GoIcon } from "./icons/go.svg";

export function SkillIcons() {
  return (
    <div className="skills-container">
      <div> </div>
      <NodejsIcon />
      <HtmlIcon />
      <JsIcon />
      <CssIcon />
      <DBIcon />
      <MongoIcon />
      <Neo4jIcon />
      <ReactIcon />
      <RustIcon />
      <GoIcon />
    </div>
  );
}
