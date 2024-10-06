import { Collapse } from "antd";
import React from "react";
import { PanelData } from "../../components/Data/Constants";
import Header from "../../components/Header/Header";
import "./Faqs.css";
const { Panel } = Collapse;

export default function Faqs() {
  
  return (
    <>
      <Header className={""} />

      <div className="container">
        <h2 className="secondary-font text-blue page-title space-top">
          <span className="text-black">Frequently</span> Asked Questions
        </h2>
        <div className="custom-faq-accordion space-lg-bottom">
          <Collapse
            accordion
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) =>
              isActive ? (
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.5 13.8125H6.5C6.05583 13.8125 5.6875 13.4442 5.6875 13C5.6875 12.5558 6.05583 12.1875 6.5 12.1875H19.5C19.9442 12.1875 20.3125 12.5558 20.3125 13C20.3125 13.4442 19.9442 13.8125 19.5 13.8125Z" fill="#207AD9" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z" fill="#207AD9" />
                  <path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z" fill="#207AD9" />
                </svg>
              )
            }
          >
            {PanelData.map((panel) => {
              return (
                <Panel header={panel.headeData} key={panel.id}>
                  <p className="collapse-body-text">{panel.panelData}</p>
                </Panel>
              );
            })}
          </Collapse>
        </div>
      </div>
    </>
  );
}
