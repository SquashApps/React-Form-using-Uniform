import React from 'react';
import { schema } from '/imports/api/schema';
import AutoForm from 'uniforms/AutoForm';
import Range from './Range';
import TimeRange from './TimeRange';
import SubmitField from 'uniforms-antd/SubmitField';
import ErrorsField from 'uniforms-antd/ErrorsField';

export default class App extends React.Component {
    onChange(...args) {
        console.log('model onChange', ...args)
    }
    render() {
        return (
            <div className='container'>
                <h1 className="uniform_test">Uniform Form Design</h1>
                <AutoForm label={false}
                    onChange={this.onChange}
                    schema={schema}
                    spacing={3}
                    onSubmit={(model) => console.log('onSubmit', model)}
                    onSubmitFailure={(model) => console.log('onsubmit failure', model)}
                    onSubmitSuccess={(model) => console.log('onSubmit success', model)}
                >
                    <Range name="dateRange" />
                    <TimeRange name="timeRange" />
                    <ErrorsField />
                    <div className="submitField">
                        <SubmitField />
                    </div>
                </AutoForm>
            </div>
        );
    }

}


