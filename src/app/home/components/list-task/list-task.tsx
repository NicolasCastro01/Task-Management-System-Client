import { TaskAPIResponse } from "~/@core/contracts/services/auth/auth";
import { TaskTag } from "../task";

interface ListTaskProps {
    tasks: TaskAPIResponse[];
}

export default function ListTask({ tasks }: ListTaskProps) {
    return (
        <article id='tasks' className='mt-10 flex rounded-lg flex-wrap gap-4'>
            {(tasks.length || 0) > 0 ? tasks.map(({id, props: task}, index) => {
              return (
                <TaskTag 
                  key={index}
                  id={id}
                  title={task.title}
                  description={task.description}
                  finishAt={task.finishAt}
                />
              );
            }) : "No tasks."}
          </article>
    );
}