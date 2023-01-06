import React from 'react'
import { Card } from './Card'

export const CardSection = () => {
  return (
    <div>
        <section className="contact bg-success ">
            <div className="card__section">
                <h2 className="text-white text-center mb-4 pt-5">
                    We love new friends!
                </h2>
                <div className="row pb-5">
                    <div className="col-4">
                        <Card title="React" buttonText="Let's Learn React.js"/>
                    </div>
                    <div className="col-4">
                        <Card title="Angular" buttonText="Let's Learn Angular.js"/>
                    </div>
                    <div className="col-4">
                        <Card title="Vue" buttonText="Let's Learn Vue.js"/>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
