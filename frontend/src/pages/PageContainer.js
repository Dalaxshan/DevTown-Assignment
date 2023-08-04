import React, { useEffect } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";

import "../App.css";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";

export default function PageContainer() {
  //editor State get updated values from the setEditorState when modify
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [convertedContent, setConvertContent] = useState(null);

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent()); //get updated value from editorState and convert into HTML
    setConvertContent(html);
  }, [editorState]);

  //Get the HTML value then return the sanatized value
  function createMarkup(html) {
    return {
      __html: DOMPurify.sanitize(html)
    };
  }


  return (
    <div>
      <header className="header">
        <h1>Rich Text Editor</h1>
      </header>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        toolbar={{
          options: ["inline", "blockType"],
        }}


      />


      <div
        className="preview"
        dangerouslySetInnerHTML={createMarkup(convertedContent)}
      ></div>
    </div>
  );
}
