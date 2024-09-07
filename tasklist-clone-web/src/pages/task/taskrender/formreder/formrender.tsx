import React, {useEffect} from 'react';
import { useGlobalStatetask } from '@/pages/task/globalstatetask';
import { Form } from '@bpmn-io/form-js-viewer';
import './formrender524.css'; // Import the local CSS file

/// วิธี hide คือใช้ display none ตัวนี้
// .fjs-powered-by.fjs-form-field {
//   display: none;
// }

const schema_2 = {
  "components": [
    {
      "label": "Number",
      "type": "number",
      "layout": {
        "row": "Row_0yed41a",
        "columns": null
      },
      "id": "Field_03ibkv9",
      "key": "number_5uazy"
    },
    {
      "label": "Number",
      "type": "number",
      "layout": {
        "row": "Row_1humo15",
        "columns": null
      },
      "id": "Field_0di2lh9",
      "key": "number_655cwk"
    }
  ],
  "type": "default",
  "id": "Form_1htpn5u",
  "executionPlatform": "Camunda Cloud",
  "executionPlatformVersion": "8.5.0",
  "exporter": {
    "name": "Camunda Modeler",
    "version": "5.24.0"
  },
  "schemaVersion": 16
}

const schema_1 = {
  "components": [
    {
      "label": "Number",
      "type": "number",
      "layout": {
        "row": "Row_16rgm3n",
        "columns": null
      },
      "id": "Field_1f8ft0q",
      "key": "number_27tkfs"
    },
    {
      "label": "Text area",
      "type": "textarea",
      "layout": {
        "row": "Row_0zosypy",
        "columns": null
      },
      "id": "Field_1yy5rb5",
      "key": "textarea_zxg6u"
    },
    {
      "label": "Text area",
      "type": "textarea",
      "layout": {
        "row": "Row_1pmr6oy",
        "columns": null
      },
      "id": "Field_035usf7",
      "key": "textarea_74n5im"
    },
    {
      "label": "Text area",
      "type": "textarea",
      "layout": {
        "row": "Row_0y3gm4b",
        "columns": null
      },
      "id": "Field_0154tpe",
      "key": "textarea_9nod0d"
    },
    {
      "label": "Text area",
      "type": "textarea",
      "layout": {
        "row": "Row_0y3gm4b",
        "columns": null
      },
      "id": "Field_07cxih1",
      "key": "textarea_z31m4n"
    },
    {
      "label": "Text area",
      "type": "textarea",
      "layout": {
        "row": "Row_07ay7t3",
        "columns": null
      },
      "id": "Field_0buhcy5",
      "key": "textarea_plbsqr"
    },
    {
      "label": "Text field",
      "type": "textfield",
      "layout": {
        "row": "Row_0z0ptk0",
        "columns": null
      },
      "id": "Field_0otaddr",
      "key": "textfield_jtycro"
    },
    {
      "label": "Text field",
      "type": "textfield",
      "layout": {
        "row": "Row_0h7e1a6",
        "columns": null
      },
      "id": "Field_0d2gnp6",
      "key": "textfield_3mybn"
    },
    {
      "label": "Text field",
      "type": "textfield",
      "layout": {
        "row": "Row_1p0rfur",
        "columns": null
      },
      "id": "Field_0kc1km6",
      "key": "textfield_u5m7bu"
    },
    {
      "label": "Text field",
      "type": "textfield",
      "layout": {
        "row": "Row_0k5cvqs",
        "columns": null
      },
      "id": "Field_1p4fmf6",
      "key": "textfield_jryf"
    },
    {
      "label": "Text field",
      "type": "textfield",
      "layout": {
        "row": "Row_05oejlq",
        "columns": null
      },
      "id": "Field_1wa3mqp",
      "key": "textfield_2wy1zi"
    },
    {
      "label": "Text field",
      "type": "textfield",
      "layout": {
        "row": "Row_1d155fq",
        "columns": null
      },
      "id": "Field_0ods3m5",
      "key": "textfield_zd382q"
    },
    {
      "label": "Text field",
      "type": "textfield",
      "layout": {
        "row": "Row_044jr89",
        "columns": null
      },
      "id": "Field_023rbpz",
      "key": "textfield_xmsl69"
    },
    {
      "label": "Text field",
      "type": "textfield",
      "layout": {
        "row": "Row_15er8k0",
        "columns": null
      },
      "id": "Field_0ov14f6",
      "key": "textfield_knm2mc"
    }
  ],
  "type": "default",
  "id": "Form_1s6i6bj",
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

let form: any = null;

const FormRender: React.FC = () => {
  const { selectedTaskData } = useGlobalStatetask();
  // formContainer.remove();
  
  useEffect(() => {
    console.log('selectedTaskData', selectedTaskData);

    const formContainer = document.querySelector('#form');
    if (formContainer) {
      if (form) {
        form.destroy();
      }
      
      form = new Form({
        container: formContainer,
      });
      let schema = {};
      if (selectedTaskData.id == "2251799813685377") {
        schema = schema_1;
      } else if (selectedTaskData.id == "2251799813685364") {
        schema = schema_2;
      }
      form.importSchema(schema, data).then(() => {
        form.on('submit', (event: any) => {
          console.log('Form <submit>', event.data, event.errors);
        });
  
        form.on('changed', 500, (event: any) => {
          console.log('Form <changed>', event.data, event.errors);
        });
      }).catch((err:any) => {
        console.log('importing form failed', err);
      });
    }

  }, [selectedTaskData.id]);

  const handleSubmit = () => {
    const { data, errors } = form.submit();

    if (Object.keys(errors).length) {
      console.error('Form submitted with errors', errors);

      
    } else {
      console.log('Form submitted successfully', data);
      alert('Form submitted successfully ' + JSON.stringify(data));
    }
  };


  return (
        <>
        <div className="overflow-auto bg-white">
            <div id="form">
              
            </div>
            <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
  );
}

export default FormRender;
