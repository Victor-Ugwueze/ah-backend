// editor options object
const editorOptions = {
      toolbar:
      {
        allowMultiParagraphSelection: true,
        buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote', 'underline',
          'strikethrough', 'justifyLeft',
          'justifyCenter',
          'justifyRight',
        ],
        diffLeft: 0,
        diffTop: -10,
        firstButtonClass: 'medium-editor-button-first',
        lastButtonClass: 'medium-editor-button-last',
        relativeContainer: null,
        standardizeSelectionStart: false,
        static: false,
        align: 'center',
        sticky: false,
        updateOnEmptySelection: false
      },
      placeholder: {
        text: 'Pen your imagination',
        hideOnClick: true
      }
};

export default editorOptions;
