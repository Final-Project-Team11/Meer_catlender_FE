export interface File {
  enrollDay: string;
  eventId: number;
  file: string;
  fileName: string;
  title: string;
  userName: string;
  eventType?: string;
  userId: string;
}

export interface Props {
  file: File;
  type: 'myfiles' | 'meetingfiles' | 'reportfiles';
}