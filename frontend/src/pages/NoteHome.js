import React from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../App.css";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";

export default function NoteHome() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  return (
    <div style={{ backgroundColor: "#dee2e6" }}>
      <div className="row">
        {/*Side navigation and Search panel*/}
        <div
          className="col col-sm-3 mt-2"
          style={{ backgroundColor: "#e9ecef" }}
        >
          <div className="d-flex bg-blue text-white rounded m-3">
            <div className="form-outline">
              <input
                type="search"
                id="form1"
                className="form-control"
                placeholder="Search.."
              />
            </div>

            <button type="button" className="btn btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 20 20"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>

            </button>
          </div>
          <hr />

          <h5 className="text-left m-4">
            <i className="bi bi-list"></i>
            Category
          </h5>

          <nav
            id="sidebarMenu"
            className="collapse d-lg-block sidebar collapse bg-white p-2 mb-3"
          >
            <div className="position-sticky">
              <div className="list-group list-group-flush mx-3 mt-2">
                <a
                  href="#"
                  className="list-group-item list-group-item-action py-2 ripple active"
                >
                  <i className="fas fa-chart-area fa-fw me-3"></i>
                  <span>Office</span>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-lock fa-fw me-3"></i>
                  <span>Home</span>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-chart-line fa-fw me-3"></i>
                  <span>School</span>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-chart-pie fa-fw me-3"></i>
                  <span>Grocery items</span>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-chart-bar fa-fw me-3"></i>
                  <span>Other</span>
                </a>
              </div>
            </div>
          </nav>

          <div className="text-end">
            <button className="btn btn-info text">
              <i className="bi bi-plus"></i>
              New Category
            </button>
          </div>
        </div>

        {/*Notes List panel */}
        <div
          className="col col-sm-4 pt-4 pb-1 m-2"
          style={{ backgroundColor: "#e9ecef" }}
        >
          <div className="col col-12 ">
            <header class="App-header">Office</header>
            <hr />

            <button type="button" className="btn btn-success p-2">
              <i className="bi bi-filter"> Filter</i>
            </button>

            <div
              className="notes p-3 m-1"
              style={{ backgroundColor: "white", borderRadius: "3px" }}
            >
              <div className="chack">
                <h5></h5>
              </div>
            </div>
          </div>

          <div className="btn-notes text-end pb-1">
            <button type="button" className="btn btn-danger">
              <i className="bi bi-pen"> New Notes</i>
            </button>
          </div>
        </div>

        {/*Create Note panel*/}
        <div
          className="col col-sm-4 pt-4 pb-1 m-2"
          style={{ backgroundColor: "#e9ecef" }}
        >
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
          />
        </div>
      </div>
    </div>
  );
}
