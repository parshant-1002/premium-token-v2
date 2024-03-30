import React, { useEffect, useState } from 'react';
import Editor, { useMonaco } from '@monaco-editor/react';
import "./editor.scss";
import { ICONS } from '../../../../assets';
import { SMART_CONTRACT_CODE } from './helpers/constants';

function CodeEditor() {
    const [currentFile, setCurrentFile] = useState('SmartContract.js');
    const [files, setFiles] = useState({
        'SmartContract.js': SMART_CONTRACT_CODE
    });
    const monaco = useMonaco();

    const defineCustomTheme = (monaco) => {
        if (monaco)
            monaco.editor.defineTheme('customTheme', {
                base: 'vs-dark', // assuming the theme in the image is a dark theme
                inherit: true, // this will also enable VS Code's default dark theme rules to be applied
                rules: [
                    { token: 'comment', foreground: '66bb6a' }, // For comments
                    { token: 'string', foreground: '#ffffff' }, // For strings
                    { token: 'keyword', foreground: 'ba68c8' }, // For keywords
                    { token: 'number', foreground: 'b5cea8' }, // For numbers
                    { token: 'variable', foreground: '81d4fa' }, // Variables
                    { token: 'type.identifier', foreground: '81d4fa' }, // Class names, function names
                    { token: 'identifier', foreground: '81d4fa' }, // Identifiers
                    { token: 'property', foreground: '81d4fa' }, // Object properties
                    { token: 'import.keyword', foreground: '81d4fa' }, // Import keyword
                ],
                colors: {
                    'editor.background': '#10302c', // Editor background color
                    'editor.foreground': '#ffffff', // Default foreground color
                    'editor.lineHighlightBackground': '#2a2d2e', // Highlighted line background color
                    'editorLineNumber.foreground': '#858585', // Line numbers color
                    'editor.selectionBackground': '#2a2d2e', // Text selection color
                    'editor.inactiveSelectionBackground': '#3a3d41', // Inactive selection
                },
            });
    }

    useEffect(() => {
        if (monaco) {
            monaco.editor.setTheme('customTheme');
        }
    }, [currentFile]);

    useEffect(() => {
        if (monaco) {
            defineCustomTheme();
            monaco.editor.setTheme('customTheme');
        }
    }, [monaco]);

    const handleEditorWillMount = (monaco) => {
        defineCustomTheme(monaco)
    };

    const handleEditorDidMount = (editor, monaco) => {
        monaco.editor.setTheme('customTheme');
    };

    const fileTabs = Object.keys(files).map(fileName => (
        <button
            key={fileName}

            style={currentFile === fileName ? { backgroundColor: '#333'} : {}}
        >
            <em>
                <img
                    className="img-fluid"
                    width={20}
                    height={20}
                    alt="JsIcon"
                    src={ICONS.JsIcon}
                />
            </em>
            {fileName}
        </button>
    ))

    return (
        <div className="editor_tabs">
            <div className="editor_tabs-item">
                {fileTabs}
            </div>
            <Editor
                // height="60vh"
                className="editor_box"
                defaultLanguage="javascript"
                language={currentFile.split('.').pop()}
                value={files[currentFile]}
                theme='customTheme'
                beforeMount={handleEditorWillMount}
                onMount={handleEditorDidMount}
                options={{
                    selectOnLineNumbers: true,
                    fontSize: 16,
                    minimap: { enabled: false },
                    automaticLayout: true,
                    domReadOnly: true,
                    readOnly:true,
                    scrollBeyondLastLine: false,
                }}
            />
        </div>
    );
}

export default CodeEditor;
