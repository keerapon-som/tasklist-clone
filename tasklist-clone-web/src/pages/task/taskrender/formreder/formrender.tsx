import React from 'react';
import { useGlobalStatetask } from '@/pages/task/globalstatetask';
import { Form } from '@bpmn-io/form-js-viewer';
import './formrender524.css'; // Import the local CSS file


const schema = {
    "components": [
      {
        "label": "EIEI_1",
        "type": "textfield",
        "layout": {
          "row": "Row_0dy1mcp",
          "columns": null
        },
        "id": "Field_01px1um",
        "key": "textfield_0yyg04"
      },
      {
        "label": "EIEI_2",
        "type": "textfield",
        "layout": {
          "row": "Row_0dy1mcp",
          "columns": null
        },
        "id": "Field_1qty0ft",
        "key": "textfield_2m2yar"
      },
      {
        "label": "EIEI_3",
        "type": "number",
        "layout": {
          "row": "Row_0dy1mcp",
          "columns": null
        },
        "id": "Field_0t61vzp",
        "key": "number_swpi8n"
      },
      {
        "label": "EIEI_4",
        "type": "textarea",
        "layout": {
          "row": "Row_0duvls3",
          "columns": null
        },
        "id": "Field_18q8dxk",
        "key": "textarea_nmmsm8m"
      },
      {
        "label": "EIEI_5",
        "type": "textfield",
        "layout": {
          "row": "Row_0r3wuxb",
          "columns": null
        },
        "id": "Field_1760is5",
        "key": "textfield_2hmqkf"
      }
    ],
    "type": "default",
    "id": "Form_1sigi36",
    "executionPlatform": "Camunda Cloud",
    "executionPlatformVersion": "8.5.0",
    "exporter": {
      "name": "Camunda Modeler",
      "version": "5.24.0"
    },
    "schemaVersion": 16
  }
  
  const data = {
    creditor: 'John Doe Company',
  };


const FormRender: React.FC = () => {
  const { selectedTaskData } = useGlobalStatetask();

  const formContainer = document.querySelector('#form');
  if (formContainer) {
    const form = new Form({
      container: formContainer,
    });

    form.importSchema(schema, data).then(() => {
      form.on('submit', (event: any) => {
        console.log('Form <submit>', event.data, event.errors);
      });

      form.on('changed', 500, (event: any) => {
        console.log('Form <changed>', event.data, event.errors);
      });
    }).catch((err) => {
      console.log('importing form failed', err);
    });
  }


  return (
        <>
            <div id="form" className="bg-white"></div>
        </>
  );
}

export default FormRender;
