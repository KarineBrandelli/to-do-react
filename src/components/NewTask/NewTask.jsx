import { Plus } from "phosphor-react";
import './NewTask.css';

export function NewTask() {
  return (
    <div class="new-item">
      <input class="new-content" type="text" placeholder="What's new?" />
      <i class="ph-plus"></i>
    </div>
  )
}
