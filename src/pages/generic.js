import React from 'react'
import Helmet from 'react-helmet'
import { Form, Field } from 'react-final-form'
import { Link } from 'gatsby'
import * as pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from "pdfmake/build/vfs_fonts";

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'

pdfMake.vfs = pdfFonts.pdfMake.vfs;

class Generic extends React.Component {

  onSubmit(values) {
    let formVals = [];
    for(let [prop, val] of Object.entries(values)){
      formVals.push(`${prop}: ${val}`);
    }
    var docDefinition = {
      content: [
        { text: 'Sexual Harrassment Complaint', style: 'header' },
        ...formVals
      ],
   
      styles: {
        header: {
          fontSize: 22,
          bold: true,
          alignment: 'center'
        }
      }
    };
    pdfMake.createPdf(docDefinition).download('complaint.pdf');
    alert('Print out this PDF and take it the nearest Police Station');
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
                      name="Accused"
                      component="input"
                      type="text"
                      placeholder="Name of Perpetrator (if known)"
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
