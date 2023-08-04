import React, { useEffect } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import {convertToHTML} from 'draft-convert';

import "../App.css";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";

export default function PageContainer() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [convertedContent,setConvertContent]=useState(null);

useEffect(()=>{
  let html=convertToHTML(editorState.getCurrentContent());
setConvertContent(html);

},[editorState]);

console.log(convertedContent);

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
      />
    </div>
  );
}
