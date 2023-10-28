import axios from "axios";
import useSWR from "swr";
import { DashboardActions } from "./interface";

export function DashboardAction(params: DashboardActions) {
    const fetcher = url => axios.get(params.url + `dashboard?choices=${params.choices}` , {
        headers: {
            "Authorization": "Bearer " + params.token,
            "Cache-Control": "no-store",
        }}).then(res => res.data);
    const { data, error, isLoading } = useSWR(`dashboard?choices=${params.choices}`, fetcher)
    return {
        data: data,
        error: error,
        isLoading: isLoading
    }
}