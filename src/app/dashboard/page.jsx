'use client'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import useHandleComments from '../hooks/useHandleComments';

import Button from '../components/Button';
import CommentPopup from '../components/CommentPopup';
import Input from '../components/Input';

const Dashboard = () => {
  const {
    data: filteredCommentData,
    loading,
    error,
    searchInput,
    handleCommentSearch,
    removeItem,
    addNewComment,
    showAddNewCommentModal,
    handleShowOrCloseModal,
  } = useHandleComments('https://jsonplaceholder.typicode.com/comments');
  
  const actionBodyTemplate = (rowData) => {
    return (
      <Button
        text="Delete"
        onClickEvent={() => removeItem(rowData)}
        type="danger"
      />
    )
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Something error, please try again...</p>

  return (
    <>
      <CommentPopup
        addComment={addNewComment}
        show={showAddNewCommentModal}
        closeModal={handleShowOrCloseModal}
      />
      <div>
        <div className='p-4'>
          <div className='md:flex md:justify-between mb-5 md:mb-0'>
            <p className=' text-2xl font-bold mb-5'>Table Comment Data</p>
            <Input
              placeholder="Search comments"
              value={searchInput}
              onChange={handleCommentSearch}
            />
          </div>
          <DataTable value={filteredCommentData} tableStyle={{ maxWidth: '100rem' }}>
            <Column field="email" header="Email"></Column>
            <Column field="body" header="Body"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="id" header="ID"></Column>
            <Column header="Action" style={{ flex: '0 0 4rem' }} body={actionBodyTemplate}></Column>
          </DataTable>
        </div>
        <div className=' sticky bottom-0 bg-white p-4 drop-shadow-lg'>
          <Button
            text="Add new comment"
            type="primary"
            onClickEvent={handleShowOrCloseModal}
          />
        </div>
      </div>
    </>
  )
}

export default Dashboard;