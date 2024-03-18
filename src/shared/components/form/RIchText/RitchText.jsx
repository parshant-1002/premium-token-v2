import { forwardRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const RichText = forwardRef(({ placeholder, content, onChange }, ref) => {
    const config = useMemo(
        () => ({
            readonly: false,
            placeholder: placeholder || 'Start typing...',
            enableDragAndDropFileToEditor: true,
            uploader: {
                url: 'https://xdsoft.net/jodit/connector/index.php?action=fileUpload',
                insertImageAsBase64URI: false,
                imagesExtensions: ['jpg', 'png', 'jpeg', 'gif']
            },
            image: {
                openOnDblClick: false,
                editSrc: false,
                useImageEditor: false,
                editTitle: true,
                editAlt: true,
                editLink: false,
                editSize: true,
                editBorderRadius: false,
                editMargins: false,
                editClass: true,
                editStyle: false,
                editId: false,
                editAlign: false,
                showPreview: true,
                selectImageAfterClose: true
            },
            zIndex: 0,
            activeButtonsInReadOnly: ['source', 'fullsize', 'print', 'about'],
            toolbarButtonSize: 'middle',
            theme: 'default',
            saveModeInCookie: false,
            spellcheck: true,
            editorCssClass: false,
            triggerChangeEvent: true,
            height: 220,
            direction: 'ltr',
            language: 'en',
            debugLanguage: false,
            i18n: 'en',
            tabIndex: -1,
            toolbar: true,
            enter: 'P',
            useSplitMode: false,
            colorPickerDefaultTab: 'background',
            imageDefaultWidth: 100,
            removeButtons: [
                'source',
                'fullsize',
                'about',
                'outdent',
                'indent',
                'video',
                'print',
                'table',
                'fontsize',
                'superscript',
                'subscript',
                'file',
                'cut',
                'selectall'
            ],
            disablePlugins: ['paste', 'stat'],
            events: {},
            textIcons: false,
            showXPathInStatusbar: false,
            extraButtons: [
                {
                    name: 'HTML',
                    mode: 3,
                    exec: function (e) {
                        e.toggleMode();
                    },
                    tooltip: 'Change mode'
                }
            ]
        }),
        [placeholder]
    );

    return (
        <JoditEditor
            ref={ref}
            value={content}
            config={config}
            tabIndex={1}
            onChange={onChange}
        />
    );
});

RichText.displayName = 'RichText';

export default RichText;
