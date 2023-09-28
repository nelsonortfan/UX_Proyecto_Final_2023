package com.example.uxj4alarma
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        //Ver_recordatorio
        val btn_ver_record:Button = findViewById(R.id.Ui_verRecordatorio)
        btn_ver_record.setOnClickListener {
            val intent_calendar = Intent(this@MainActivity, CalendarActivity::class.java)
            startActivity(intent_calendar)
        }
        val btn_add_record:Button = findViewById(R.id.Ui_addRecordatorio)
        btn_add_record.setOnClickListener {
            val intent_add_record = Intent(this@MainActivity, CreateActivity::class.java)
            startActivity(intent_add_record)
        }

    }
}