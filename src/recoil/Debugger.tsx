import {useEffect} from 'react'
import {useRecoilSnapshot} from "recoil";

export default function RecoilDebugger() {
    const snapshot = useRecoilSnapshot()
    useEffect(() => {
        for (const node of snapshot.getNodes_UNSTABLE({isModified: true})) {
            console.debug(node.key, snapshot.getLoadable(node))
        }
    }, [snapshot])
    return null
}