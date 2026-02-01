import React from "react";
import ReactDOM from "react-dom/client";
// ! {} this is where we put attributes for our tag

const heading = React.createElement("h1", {id:"Parent"}, "Hello world");
// heading is object also createElement gives us object where {} is attribute and hello world is children and whole thing is props
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); 


// Making nested structure
/** 
 * 
 * <div id='parent'>
 *  <div id='child'>
 * <h1> I,m h1 tag</h1>
 * <h2> I,m h1 tag</h2>
 * </div>
 * </div>
 */

const parent=React.createElement('div',{id:"parent"},React.createElement('div',{id:"child"},[React.createElement('h1',{},"Im h1 tag"),React.createElement('h2',{},"Im h2 tag")]))
root.render(parent); 
// When render it creates corresponding tag
// when when to pass more than one child we pass as array of children