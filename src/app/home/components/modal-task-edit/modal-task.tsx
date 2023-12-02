import { InputLabelTag } from "~/app/common/components/input-label";
import { ModalComponent } from "../modal";
import { ChangeEvent, useEffect, useState } from "react";
import { ButtonActionsTag } from "~/app/common/components/button-actions";
import { ButtonTag } from "~/app/common/components/button";
import { EditTaskProps } from "~/@core/contracts/services/task/task";
import { makeUpdateTask } from "~/@core/main/factories/usecases/task/update-task";

interface ModalTaskProps {
    title: string;
    show: boolean;
    task: EditTaskProps;
    onClose: () => void;
    getTasks: () => void;
}

export default function ModalTask({ title, task, show, onClose, getTasks }: ModalTaskProps) {
    const [loading, setLoading] = useState<boolean>(false);
    const [state, setState] = useState<EditTaskProps>({
        id: 0,
        title: '',
        description: '',
        finishAt: new Date()
    });
    const updateTaskService = makeUpdateTask();

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
        setLoading(true);
        await updateTaskService.run(state);

        onClose();
        setLoading(false);
    }

    useEffect(() => {
        setState({
            id: task.id,
            title: task.title,
            description: task.description,
            finishAt: task.finishAt
        });
    }, [show]);

    useEffect(() => {
        getTasks()
    }, [show === false]);

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
                            value={state.title ?? ''}
                        />
                        <InputLabelTag
                            id="description"
                            label="Description"
                            onInput={(event: ChangeEvent<HTMLInputElement>) => handleState("description", event.target.value)}
                            value={state.description ?? ''}
                        />
                        <InputLabelTag
                            id="finish_at"
                            label="Finish at"
                            onInput={(event: ChangeEvent<HTMLInputElement>) => handleState("finishAt", event.target.value)}
                            value={state.finishAt ?? ''}
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