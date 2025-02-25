import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
  Edit,
  Toolbar,
  Selection,
  Filter,
  Sort,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";
const Customers = () => {
  // const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10  p-2 md:p-10 bg-white rounded-3xl">
      <Header category={"Page"} title={"Customers"} />
      <GridComponent
        dataSource={customersData}
        allowPaging={true}
        allowSorting
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width={"auto"}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar, Selection, Filter, Sort]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
