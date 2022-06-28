import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Channel } from 'src/models/channel.class';
import { CurrentChannel } from 'src/models/current-channel.class';
import { Message } from 'src/models/message.class';
import { Thread } from 'src/models/thread.class';
import { AuthService } from 'src/services/auth.service';
import { DataService } from 'src/services/data.service';
import { EditorService } from 'src/services/editor.service';

@Component({
  selector: 'app-message-actions',
  templateUrl: './message-actions.component.html',
  styleUrls: ['./message-actions.component.scss'],
})
export class MessageActionsComponent implements OnInit {
  /* @Input() currentChannel!: CurrentChannel; */
  @Input() thread!: Thread;
  @Input() message!: Message;
  @Input() actionsType!: string;
  // currentChannel!: Channel;
  /*   currentChannel: CurrentChannel;
   */
  constructor(
    public router: Router,
    private Data: DataService,
    private editor: EditorService,
    private Auth: AuthService
  ) {}

  async ngOnInit(): Promise<void> {
    if (!this.message) {
      this.message = await this.Data.getMessageFromMessageId(
        this.thread.firstMessageID
      );
    }
  }

  answerInThread() {
    this.Data.currentThread$.next(this.thread);
    this.Data.setUserSessionInLocalStorage(this.Auth.currentUserId, this.Data.currentChannel.id, this.Data.currentChannel.type,  this.thread.threadID);
    this.Data.getMessagesFromThreadID(this.thread.threadID);
  }

  async deleteMessage() {
    console.log(this.thread);
    this.Data.deleteMessage(this.message.messageID);
    if (this.isLastMessageInThread()) {
      this.deleteThread();
    } else {
      await this.reduceAnswersInThread();
      if (this.thread.firstMessageID == this.message.messageID) {
        this.deleteFirstMessageInThread();
      }
    }
  }

  isLastMessageInThread() {
    return (
      this.thread.answerAmount == 0 ||
      (this.thread.answerAmount == 1 && this.thread.firstMessageID == 'deleted')
    );
  }

  async reduceAnswersInThread() {
    let thread = new Thread(this.thread);
    thread.answerAmount--;
    await this.Data.saveThread(thread.toJSON());
    this.Data.currentThread$.next(thread);
  }

  deleteFirstMessageInThread() {
    let thread = new Thread(this.thread);
    thread.firstMessageID = 'deleted';
    this.Data.saveThread(thread.toJSON());
    this.Data.currentThread$.next(thread);
  }

  deleteThread() {
    this.Data.deleteThread(this.thread.threadID);
  }

  setEditmode() {
    this.editor.messageToEdit = this.message;
  }
}
