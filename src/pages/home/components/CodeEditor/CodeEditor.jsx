import React, { useEffect, useState } from 'react';
import Editor, { useMonaco } from '@monaco-editor/react';
import "./editor.scss";
import { ICONS } from '../../../../assets';

function CodeEditor() {
    const [currentFile, setCurrentFile] = useState('file1.js');
    const [files, setFiles] = useState({
        'file1.js': `import mongoose,{Schema} from 'mongoose';
    // Collection name
    export const collection = 'Product';
    // Schema
    const schema = new Schema({
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        }
    },
        {
            timestamps: true
        });

    // Model
    export default mongoose.model(collection, schema, collection);
`,
        'file2.py': "# Python code for file 2",
    });
    const monaco = useMonaco();

    const defineCustomTheme = (monaco) => {
        if (monaco)
            monaco.editor.defineTheme('customTheme', {
                base: 'vs-dark', // assuming the theme in the image is a dark theme
                inherit: true, // this will also enable VS Code's default dark theme rules to be applied
                rules: [
                    // Custom color rules can be added here
                    // Example: (you should change the colors based on your image)
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
                    // More colors can be customized as needed
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


    const handleEditorChange = (value) => {
        console.log(value, "value><><><><><")
        setFiles({ ...files, [currentFile]: value });
    };

    const handleFileChange = (fileName) => {
        setCurrentFile(fileName);
    };

    const handleEditorWillMount = (monaco) => {
        defineCustomTheme(monaco)
    };

    const handleEditorDidMount = (editor, monaco) => {
        monaco.editor.setTheme('customTheme');
    };

    const fileTabs = Object.keys(files).map(fileName => (
        <button
            key={fileName}
            onClick={() => handleFileChange(fileName)}
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
                height="90vh"
                defaultLanguage="javascript"
                language={currentFile.split('.').pop()}
                value={files[currentFile]}
                onChange={handleEditorChange}
                theme='customTheme'
                beforeMount={handleEditorWillMount}
                onMount={handleEditorDidMount}
                options={{
                    selectOnLineNumbers: true,
                    fontSize: 16,
                    minimap: { enabled: false },
                    automaticLayout: true,
                }}
            />
        </div>
    );
}

export default CodeEditor;
