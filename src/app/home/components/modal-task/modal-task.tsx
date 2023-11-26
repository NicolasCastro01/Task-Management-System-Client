import { ChangeEvent, useEffect, useState } from "react";
import { CreateTaskProps } from "~/@core/contracts/services/task/task";
import { makeSendTask } from "~/@core/main/factories/usecases/task";
import { ButtonTag } from "~/app/common/components/button";
import { InputLabelTag } from "~/app/common/components/input-label";

interface ModalTaskProps {
    show?: boolean;
    onClose: () => void;
}


export default function ModalTask({ show = false, onClose }: ModalTaskProps) {
    const [loading, setLoading] = useState<boolean>(false);
    const [state, setState] = useState<CreateTaskProps>({
        title: '',
        description: '',
        finish_at: new Date()
    });
    const sendTaskService = makeSendTask();
    
    const handleState = (key: string, value: string): void => {
        setState(() => ({
            ...state,
            [key]: value
        }));
    }

    const handleModal = () => {
        return show ? 'flex' : 'hidden';
    }

    const handleSubmit = async () => {
        if(!isNull(state.title) && !isNull(state.description) && !isNull(state.finish_at.toString())) {
            setLoading(true);
            await sendTaskService.run(state);
            
            onClose();
            return;
        }

        alert('algo de errado aconteceu.');
        setLoading(false);
    }

    function isNull(value: string) {
        return value.length === 0;
    }

    useEffect(() => {
        if(!show) {
            setState({
                title: '',
                description: '',
                finish_at: new Date()
            });
            
            return
        }
    }, [show]);

    return (
        <>
            <div
                id="modal-main-container"
                className={
                    `
                        absolute
                        top-0
                        left-0
                        z-50
                        w-full
                        min-h-screen
                        backdrop-blur-sm
                        ${handleModal()}
                        items-center
                        justify-center
                        animate
                    `
                }
            >
                <div
                    id="modal-container"
                    className="
                        flex
                        flex-col
                        justify-center
                        w-4/6
                        h-80
                        rounded-xl
                        border-4
                        border-white
                        bg-slate-900
                        transition-all
                        p-4
                        gap-4
                    "
                >
                    <section id="form-header" className="flex items-center justify-center">
                        <h1
                            className="text-white font-bold"
                        >Create task</h1>
                    </section>
                    <section id="form-body"
                        className="
                            flex
                            flex-col
                        "
                    >
                        <InputLabelTag
                            id="title"
                            label="Title"
                            onInput={(event: ChangeEvent<HTMLInputElement>) => handleState("title", event.target.value)}
                            value={state.title}
                        />
                        <InputLabelTag
                            id="description"
                            label="Description"
                            onInput={(event: ChangeEvent<HTMLInputElement>) => handleState("description", event.target.value)}
                            value={state.description}
                        />
                        <InputLabelTag
                            id="finish_at"
                            label="Finish at"
                            onInput={(event: ChangeEvent<HTMLInputElement>) => handleState("finish_at", event.target.value)}
                            value={state.finish_at.toString()}
                            type="date"
                        />
                    </section>
                    <section id="actions" className="flex items-center justify-between gap-4">
                        <ButtonTag label="cancel"
                            className="
                                bg-red-800
                                text-white
                                drop-shadow-xl
                                hover:drop-shadow-lg
                                transition-all
                            "
                            onClick={onClose}
                        />
                        <ButtonTag label="create"
                            className="
                                bg-green-600
                                text-white
                                drop-shadow-xl
                                hover:drop-shadow-lg
                                transition-all
                            "

                            onClick={handleSubmit}
                            disabled={loading}
                        />
                    </section>
                </div>
            </div>
        </>
    );
}