'use client'

import { useEffect, useState } from "react"

const useFetcher = (url) => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([])

  const [searchInput, setSearchInput] = useState('');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showAddNewCommentModal, setShowAddNewCommentModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
  
      try {
        await res.json().then(res => {
          if (res && res.length > 0) {
            const slicedData = res.slice(0, 50);

            setData(slicedData);
            setNewData(slicedData);
            setLoading(false)
          }
        })
      } catch(err) {
        if (err) {
          setError(true);
        }
      }
    }

    fetchData();
  }, [url])

  const removeItem = (commentData) => {
    const { id: commentId } = commentData;

    setData(data.filter(item => item.id !== commentId));
    setNewData(newData.filter(item => item.id !== commentId));
  };

  const addNewComment = (payload) => {
    const { email, name, body } = payload;

    const dataPayload = {
      id: (data[data.length - 1].id) + 1,
      email,
      name,
      body,
    }

    setData((prevItems) => [...prevItems, dataPayload]);

    handleShowOrCloseModal();
  }

  const handleShowOrCloseModal = () => {
    setShowAddNewCommentModal(!showAddNewCommentModal);
  }

  const handleCommentSearch = (e) => {
    const { value } = e.target;

    setSearchInput(value);

    const filtered = data.filter((item) => {
        const { body, email, name } = item
        return body.toLowerCase().includes(value.toLowerCase()) || email.toLowerCase().includes(value.toLowerCase())
          || name.toLowerCase().includes(value.toLowerCase())
      }
    )

    setData(filtered);
  }

  useEffect(() => {
    if (searchInput.length === 0) {
      setData(newData);
    }
  }, [searchInput])

  return {
    data,
    loading,
    searchInput,
    error,
    showAddNewCommentModal,
    removeItem,
    addNewComment,
    setData,
    handleShowOrCloseModal,
    searchInput,
    handleCommentSearch,
  };
};

export default useFetcher;