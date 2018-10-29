import React from 'react'
import Helmet from 'react-helmet'
import { Form, Field } from 'react-final-form'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import * as jsPDF from 'jspdf'


class Generic extends React.Component {

  onSubmit(values) {
    var doc = new jsPDF()
    doc.setFont("helvetica");
    doc.setFontType("bold");
    doc.setFontSize(13);
    doc.text('Sexual Harrasment Complaint', 70, 10)
    doc.setFontType("normal");
    doc.setFontSize(10);
    let formVals = [];
    for(let [prop, val] of Object.entries(values)){
      if(prop !== 'Description')
        formVals.push(`${prop}: ${val}`);
    }
    let lastLine = `Description: ${values['Description']}`,
    lastLines = doc.splitTextToSize(lastLine, 180);
    formVals.push(...lastLines);
    doc.text(formVals, 10, 20)
    doc.save('complaint.pdf')
    alert('Print out this PDF and take it to your closest Police Station');
  }

  render() {

    return (
      <Layout>
        <Helmet title="Report a Crime" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <h2>Complete the form below to generate your complaint.</h2>
            <Form
              onSubmit={this.onSubmit}
              render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                  <div>
                    <Field
                      name="Name"
                      component="input"
                      type="text"
                      placeholder="Full Name"
                    />
                    <br/>
                  </div>
                  <div>
                    <Field
                      name="Phone"
                      component="input"
                      type="text"
                      placeholder="Phone Number"
                    />
                    <br/>
                  </div>
                  <div>
                    <Field
                      name="Address"
                      component="input"
                      type="text"
                      placeholder="Address"
                    />
                    <br/>
                  </div>
                  <div>
                    <Field
                      name="Date"
                      component="input"
                      type="text"
                      placeholder="Date (of incident)"
                    />
                    <br/>
                  </div>
                  <div>
                    <Field
                      name="Culprit"
                      component="input"
                      type="text"
                      placeholder="Name of Culprit (if known)"
                    />
                    <br/>
                  </div>
                  <div>
                    <Field name="Description" component="textarea" placeholder="Description of the Incident" />
                    <br/>
                  </div>
                  <div className="buttons">
                    <button type="submit" disabled={submitting || pristine}>
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={form.reset}
                      disabled={submitting || pristine}
                    >
                      Reset
                    </button>
                  </div>
                </form>
              )}
            />
            <footer className="major">
              <ul className="actions">
                <li><Link to="/" className="button">Back Home</Link></li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
