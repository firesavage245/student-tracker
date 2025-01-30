// JavaScript version of the Student Schedule Tracker

const students = {
    zacharias: {
        schedule: {
            Sunday: ['LA', 'Science'],
            Monday: ['Math', 'Keyboarding'],
            Tuesday: ['LA', 'Science'],
            Wednesday: ['Math', 'Keyboarding'],
            Thursday: ['LA', 'Science'],
            Friday: ['Math', 'Keyboarding']
        },
        progress: {
            Keyboarding: 85,
            Math: 14,
            Science: 26,
            LA: 85
        },
        lastSubmission: {}
    },
    mattatha: {
        schedule: {
            Sunday: ['Algebra'],
            Monday: ['Biology'],
            Tuesday: ['Algebra'],
            Wednesday: ['Biology'],
            Thursday: ['English'],
            Friday: ['English']
        },
        progress: {
            Algebra: 37,
            Biology: 56,
            English: 60
        },
        lastSubmission: {}
    },
    hadassah: {
        schedule: {
            Sunday: ['Civics', 'Science'],
            Monday: ['Pre-Algebra'],
            Tuesday: ['Civics', 'Science'],
            Wednesday: ['Pre-Algebra'],
            Thursday: ['English'],
            Friday: ['English']
        },
        progress: {
            Civics: 50,
            'Pre-Algebra': 3,
            English: 20,
            'Physical Science': 54
        },
        lastSubmission: {}
    }
};

function updateSchedule(student) {
    console.clear();
    console.log(`Schedule for ${student}:`);
    for (const [day, subjects] of Object.entries(students[student].schedule)) {
        console.log(`${day}: ${subjects.join(', ')}`);
    }
    console.log('\nProgress:');
    for (const [subject, percent] of Object.entries(students[student].progress)) {
        console.log(`${subject}: ${percent}%`);
    }
}

function updateDate(student, subject) {
    const date = new Date().toLocaleDateString();
    students[student].lastSubmission[subject] = date;
    console.log(`Updated last submission date for ${subject}: ${date}`);
}

function updateProgress(student, subject, newProgress) {
    if (students[student].progress.hasOwnProperty(subject)) {
        students[student].progress[subject] = newProgress;
        console.log(`Updated progress for ${subject}: ${newProgress}%`);
    } else {
        console.log(`Subject ${subject} not found for ${student}.`);
    }
}

function generateLink(student) {
    const baseUrl = window.location.href.split('?')[0];
    const link = `${baseUrl}?student=${student}`;
    console.log(`Share this link: ${link}`);
}

// Example Usage
updateSchedule('zacharias');
updateDate('zacharias', 'Science');
updateProgress('zacharias', 'Math', 25);
generateLink('zacharias');