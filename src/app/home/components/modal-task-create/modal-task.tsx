import { InputLabelTag } from "~/app/common/components/input-label";
import { ModalComponent } from "../modal";
import { ChangeEvent, useEffect, useState } from "react";
import { ButtonActionsTag } from "~/app/common/components/button-actions";
import { ButtonTag } from "~/app/common/components/button";
import { CreateTaskProps } from "~/@core/contracts/services/task/task";
import { makeSendTask } from "~/@core/main/factories/usecases/task";

interface ModalTaskProps {
    title: string;
    show: boolean;
    onClose: () => void;
    getTasks: () => void;
}

export default function ModalTask({ title, show, onClose, getTasks }: ModalTaskProps) {
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
        if (!isNull(state.title) && !isNull(state.description) && !isNull(state.finish_at.toString())) {
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
        if (!show) {
            setState({
                title: '',
                description: '',
                finish_at: new Date()
            });

            return
        }
    }, [show]);

    useEffect(() =>{
        getTasks();
    }, [show === false])

    return (
        <>
            <ModalComponent.Main show={handleModal()}>
                <ModalComponent.Container>
                    <ModalComponent.Header>
                        <ModalComponent.Title>{title}</ModalComponent.Title>
                    </ModalComponent.Header>
                    <ModalComponent.Body>
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
                    </ModalComponent.Body>

                    <ButtonActionsTag>
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
                    </ButtonActionsTag>
                </ModalComponent.Container>
            </ModalComponent.Main>
        </>
    );
}