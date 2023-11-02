import { useContext, useEffect } from "react";
import { Context } from "@/states";

export const useTenders = async () => {

    const context = useContext(Context)
    const { tenders } = context
    const [allTenders, setAllTenders] = tenders

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchTenders = await fetch("http://localhost:3001/api/user/tenders")
                const res = await fetchTenders.json();
                setAllTenders(res)
                console.log(res)

            } catch (error) {
                console.log(error)
            }


        }
        fetchData()

    }, [])



}

export const useTender = (id) => {

    useTenders()
    const context = useContext(Context)
    const { tenders, tenderItem } = context
    const [tender, setTender] = tenderItem
    const [allTenders, setAllTenders] = tenders

    allTenders.map(item => {
        if (item._id == id) {
            setTender(item)
        }
    })



}
