import React, { useEffect, useState } from "react";
import Layout from "@/component/layout";
import { useDispatch, useSelector } from "react-redux";
import { DeleteRegionRequest, GetRegionRequest } from "../redux-saga/action/regionAction";
import RegionFormikUpdate from "./RegionFormikUpdate";
import RegionFormikCreate from "./RegionFormikCreate";

export default function RegionRedux() {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState<any>(false);
  const [displayEdit, setDisplayEdit] = useState<any>(false);
  const [refresh, setRefresh] = useState<any>(false);
  const [id, setId] = useState<any>(false);
  const { regions } = useSelector((state: any) => state.regionState);

  useEffect(() => {
    dispatch(GetRegionRequest());
    setRefresh(false);
  }, [refresh]);

  const onClick = (id: any) => {
    setDisplayEdit(true);
    setId(id);
  };

  const onDelete = async (id: any) => {
    dispatch(DeleteRegionRequest(id));
    window.alert("Delete Successfully");
    setDisplay(false);
    setRefresh(!refresh);
  };

  return (
    <div>
      <Layout>
        <>
          {displayEdit ? (
            <RegionFormikUpdate setRefresh={setRefresh} setDisplay={setDisplayEdit} id={id} />
          ) : display ? (
            <RegionFormikCreate setRefresh={setRefresh} setDisplay={setDisplay} id={id} />
          ) : (
            <>
              <h2>List Region</h2>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setDisplay(true)}>
                {" "}
                Add Region{" "}
              </button>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        Region ID
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Region Name
                      </th>
                      <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        Region Photo
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {regions &&
                      regions.map((item: any) => {
                        return (
                          <>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                {item.regionId}
                              </th>
                              <td className="px-6 py-4">{item.regionName}</td>
                              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">{item.regionPhoto}</td>
                              <td className="px-6 py-4">
                                <div>
                                  <button onClick={() => onClick(item.regionId)} className="group h-10 w-[80px] border border-green-500 rounded-md hover:bg-green-600 px-4 py-2 m-2 bg-green-500 text-white relative overflow-hidden">
                                    Edit
                                  </button>
                                  <button onClick={() => onDelete(item.regionId)} className="border border-red-500 bg-red-500 text-white rounded-md h-10 w-[80px] px-4 py-2 m-2  hover:bg-red-600 focus:outline-none focus:shadow-outline">
                                    Delete
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      </Layout>
    </div>
  );
}
