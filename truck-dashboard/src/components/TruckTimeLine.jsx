import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

export default function TruckTimeline() {
    return (
        <React.Fragment>
            <Timeline
                sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.1,
                    },
                }}
            >
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        09:30 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        Gurgaon - Faridabad Road, Gurgaon, Delhi NCR
                    </TimelineContent>
                </TimelineItem>
                
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        10:00 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        Sector 110A, Gurgaon, Chandan Vihar, Gurgaon, Delhi NCR
                    </TimelineContent>
                </TimelineItem>
                
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        10:30 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        Vaishali, Ghaziabad, Delhi NCR
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        11:00 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        Noida Extension, Noida, Delhi NCR
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        11:30 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        Sector 2, Greater Noida, Sector 2, Greater Noida, Delhi NCR
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        12:00 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{width:"100px", overflow:"hide"}}>
                        tower 2, 6th floor, Crossings Republik, Ghaziabad, Delhi NCR
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        12:15 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        Sector 79, Gurgaon, Delhi NCR
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        1:00 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>
                        Shakti Khand 2, Ghaziabad, Delhi NCR
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </React.Fragment>
    );
}
